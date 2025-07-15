import componentiPagine2Resource from '../../resources/componenti-pagine2'
export default async function handler(req, res) {
  try {
    const response = await componentiPagine2Resource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
      