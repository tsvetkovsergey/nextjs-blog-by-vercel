export default function Handler(req, res) {
  res.status(200).json({ text: 'Hello', color: '#123456' });
}
