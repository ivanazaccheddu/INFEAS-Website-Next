import categorieDocumenti3Resource from '../../resources/categorie-documenti3'
export default async function handler(req, res) {
  try {
    const response = await categorieDocumenti3Resource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
      