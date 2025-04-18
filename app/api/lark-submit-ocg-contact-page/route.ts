// This route handles form submission for the /contact route
import { type NextRequest, NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"

const APP_ID = "cli_a764d07cda38d02f"
const APP_SECRET = "vX3EOqpniUnXxgPq35buFbuWSjOwNMI0"
const CHAT_ID = "oc_f62ce760a4dae90c67754552b045f895"

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    let formData

    try {
      formData = await request.json()
    } catch (error) {
      console.error("Failed to parse request JSON:", error)
      return NextResponse.json(
        {
          success: false,
          message: "Invalid JSON in request body",
        },
        { status: 400 },
      )
    }

    if (!formData.name || !formData.email || !formData.phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        { status: 400 },
      )
    }

    console.log("Form data received:", formData)

    try {
      // Step 1: Get tenant access token
      console.log("Requesting Lark token...")
      const tokenResponse = await fetch("https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ app_id: APP_ID, app_secret: APP_SECRET }),
      })

      if (!tokenResponse.ok) {
        const errorText = await tokenResponse.text()
        console.error("Token response not OK:", tokenResponse.status, errorText)
        return NextResponse.json(
          {
            success: false,
            message: `Lark token API error: ${tokenResponse.status}`,
          },
          { status: 502 },
        )
      }

      const tokenData = await tokenResponse.json()
      console.log("Token response received:", tokenData)

      if (!tokenData.tenant_access_token) {
        console.error("No token in response:", tokenData)
        return NextResponse.json(
          {
            success: false,
            message: "Failed to get tenant access token",
          },
          { status: 502 },
        )
      }

      // Step 3: Send message to Lark
      console.log("Sending message to Lark...")
      const messageText = `New Form Submission:

CONTACT INFORMATION:
Name: ${formData.name}
Email: ${formData.email}
Phone Number: ${formData.phone}

BUSINESS DETAILS:
Business Name: ${formData.businessName || "Not provided"}
Website: ${formData.website || "Not provided"}
Industry: ${formData.industry || "Not provided"}
Timeline: ${formData.timeline || "Not provided"}

BUSINESS DESCRIPTION:
${formData.businessDescription || "Not provided"}

SERVICES REQUESTED:
${formData.services ? formData.services : "No services selected"}

Submission time: ${new Date().toLocaleString()}`

      const messageResponse = await fetch(
        "https://open.larksuite.com/open-apis/im/v1/messages?receive_id_type=chat_id",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenData.tenant_access_token}`,
          },
          body: JSON.stringify({
            receive_id: CHAT_ID,
            msg_type: "text",
            content: JSON.stringify({ text: messageText }),
            uuid: uuidv4(),
          }),
        },
      )

      if (!messageResponse.ok) {
        const errorText = await messageResponse.text()
        console.error("Message response not OK:", messageResponse.status, errorText)
        return NextResponse.json(
          {
            success: false,
            message: `Lark message API error: ${messageResponse.status}`,
          },
          { status: 502 },
        )
      }

      const result = await messageResponse.json()
      console.log("Message response received:", result)

      if (result.code === 0) {
        return NextResponse.json({ success: true, message: "Form submitted successfully" })
      } else {
        console.error("Lark API error:", result)
        return NextResponse.json(
          {
            success: false,
            message: `Lark API error: ${result.msg}`,
          },
          { status: 502 },
        )
      }
    } catch (apiError: any) {
      console.error("API call error:", apiError)
      return NextResponse.json(
        {
          success: false,
          message: `API error: ${apiError.message || "Unknown error"}`,
        },
        { status: 502 },
      )
    }
  } catch (error: any) {
    console.error("Top-level POST error:", error)
    return NextResponse.json(
      {
        success: false,
        message: `Server error: ${error.message || "An unexpected error occurred"}`,
      },
      { status: 500 },
    )
  }
}
