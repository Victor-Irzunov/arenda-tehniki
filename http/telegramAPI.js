import axios from 'axios'
//мои
// const token = '5562126487:AAGqX2TBd3toX15OgSCQ2yW55RNfgtBWQko'
// const chat_id = '-1001794221917'

//клиент
const token = '6213798158:AAHRagROrFyU_apZhTrL_urtmDTmaXM0aNU'
const chat_id = '-1001921399694'
const uri_api = `https://api.telegram.org/bot${token}/sendMessage`



export const sendOrderTelegram = async (obj) => {
	const { data } = await axios.post(uri_api, {
		chat_id,
		parse_mode: 'html',
		text: obj,
	})
	return data
}






