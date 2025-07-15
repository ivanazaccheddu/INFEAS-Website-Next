import scuoleScuoleEUniversitResource from '../../resources/scuole-scuole-e-universit'
export default async function handler(req, res) {
  try {
    const response = await scuoleScuoleEUniversitResource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
      