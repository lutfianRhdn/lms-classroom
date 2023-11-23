export default async function getResponse(data:any, message:string, status:number=200) {
  return Response.json({data, message})
}
