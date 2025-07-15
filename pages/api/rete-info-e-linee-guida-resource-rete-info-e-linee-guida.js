import reteInfoELineeGuidaResource from '../../resources/rete-info-e-linee-guida'
export default async function handler(req, res) {
  try {
    const response = await reteInfoELineeGuidaResource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
      