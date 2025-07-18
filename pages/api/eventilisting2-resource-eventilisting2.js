import eventilisting2Resource from '../../resources/eventilisting2'
export default async function handler(req, res) {
  try {
    const response = await eventilisting2Resource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
      