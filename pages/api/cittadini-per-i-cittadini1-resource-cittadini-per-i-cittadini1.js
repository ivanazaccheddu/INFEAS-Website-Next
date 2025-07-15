import cittadiniPerICittadini1Resource from '../../resources/cittadini-per-i-cittadini1'
export default async function handler(req, res) {
  try {
    const response = await cittadiniPerICittadini1Resource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
      