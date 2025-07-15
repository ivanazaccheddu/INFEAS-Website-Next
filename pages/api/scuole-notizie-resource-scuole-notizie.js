import scuoleNotizieResource from '../../resources/scuole-notizie'
export default async function handler(req, res) {
  try {
    const response = await scuoleNotizieResource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
      