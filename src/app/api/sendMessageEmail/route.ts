import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { TransportOptions } from "nodemailer";

interface Props {
  req: {
    method: string;
    body: any;
  };
  res: any;
}

interface Attachment {
  filename: string;
  content: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "",
  port: process.env.SMTP_PORT || "",
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
} as TransportOptions);

transporter.verify(function (error) {
  if (error) {
    console.log(error, "Inside Error");
  } else {
    console.log("Server is ready to take our messages");
  }
});

export async function POST(request: NextRequest, res: NextApiResponse) {
  const req = await request.json();
  const { from, to, subject, text } = req;

  try {
    const mailOptions = {
      from,
      to,
      subject,
      text,
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });
    // await transporter.sendMail({ ...mailOptions });
    return NextResponse.json(
      { message: "Email sent succesfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to send Email" },
      { status: 500 }
    );
  }
}
