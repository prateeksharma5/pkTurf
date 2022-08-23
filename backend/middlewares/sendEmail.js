const nodemailer=require("nodemailer");
exports.sendEmail=async(options)=>{

    const transporter=nodemailer.createTransport({
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "4928988ba89973",
                    pass: "daf56a3354ccb4"
                }
        })
    const mailOptions={
        from:process.env.SMPT_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.message
    }
    await transporter.sendMail(mailOptions)
}