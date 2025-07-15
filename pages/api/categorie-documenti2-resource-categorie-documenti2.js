import categorieDocumenti2Resource from '../../resources/categorie-documenti2'
export default async function handler(req, res) {
  try {
    const response = await categorieDocumenti2Resource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
      