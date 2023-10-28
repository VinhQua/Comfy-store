export default function Page({ params }: { params: { id: string } }) {
  return <div>My product: {params.id}</div>;
}
