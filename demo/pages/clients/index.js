import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "zenghyun", name: "Zenghyun" },
    { id: "manuel", name: "Manuel" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/*  아래처럼 작성하는 것은 하드코딩 */}
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            {/* 아래와 같이 작성할 수도 있다. */}
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
