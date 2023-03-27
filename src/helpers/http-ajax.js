export default async function ajax(url) {
  const data = await fetch(url)
  const json = await data.json()
  return json
}