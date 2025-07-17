import organizzazioni1Resource from '../../resources/organizzazioni1'
export default async function handler(req, res) {
  try {
    const response = await organizzazioni1Resource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
      