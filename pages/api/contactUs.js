import sgMail from '@sendgrid/mail'


// REFER to DIS VID https://www.youtube.com/watch?v=QrVYLLpoyMw
const SENDGRID_API_KEY = "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"
sgMail.setApiKey(SENDGRID_API_KEY)

const sendContactForm = async (req, res) => {

    if (req.method === "POST") {
        var data = req.body
        console.log(data);
        var contact_content = "<table>" +
            "<tr><td>店舗名:</td><td>" + data.storename + "</td></tr>" +
            "<tr><td>ご担当者様のお名前:</td><td>" + data.workername + "</td></tr>" +
            "<tr><td>ご住所:</td><td>" + data.address + "</td></tr>" +
            "<tr><td>電話番号:</td><td>" + data.telnum + "</td></tr>" +
            "<tr><td>メールアドレス:</td><td>" + data.mail + "</td></tr>" +
            "<tr><td>現在ご利用のPOSメーカー名:</td><td>" + data.pos + "</td></tr>" +
            "</table>"

        const msg = {
            to: "sales@qlub.jp",
            from: 'rieko@qlub.jp',
            subject: "LPからベンダーの応募がきました",
            text: "メール内容",
            html: contact_content,
        }
        try {
            const info = await sgMail.send(msg)
            res.status(200).json({ status: "ok" })
        } catch (error) {
            console.log(error);
            res.status(422).json({ statusText: "fail to send refer server log" })
        }
    } else {
        res.status(404).json({ statusText: "not found" })
    }
    return res
}

export default sendContactForm