import reteProcedure1Resource from '../../resources/rete-procedure1'
export default async function handler(req, res) {
  try {
    const response = await reteProcedure1Resource(req.query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).send('Something went wrong')
  }
}
      