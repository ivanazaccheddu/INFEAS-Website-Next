import reteInfoELineeGuida1Resource from '../../resources/rete-info-e-linee-guida1'
export default async function handler(req, res) {
  try {
    const response = await reteInfoELineeGuida1Resource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
      