import { IRequest } from '../types'
import { useState, useEffect } from "preact/hooks";
import RequestCard from "./RequestCard";

export default function RequestsList() {
  const [query, setQuery] = useState("");
  const [request, setRequest] = useState<IRequest[]>([]);

  useEffect(() => {
    fetch(`/api/search?q=${encodeURIComponent(query)}`)
      .then((response) => response.json())
      .then((request) => setRequest(request));
  }, [query]);

  return (
    <>
      <input
        type="text"
        name="q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xl border-gray-300 border-2 rounded-md"
        placeholder="Search"
      />
      <div className="mt-3 grid grid-cols-3 gap-5">
        {request.slice(0, 10).map((request) => (
          <a href={`/request/${request.id}`} key={request.id}>
            <RequestCard request={request}></RequestCard>
          </a>
        ))}
      </div>
    </>
  );
}








/*interface RequestCardProps {
	request: IRequest
}

export default function RequestCard ({ request }: RequestCardProps) {
	return <div className="border border-slate-400 rounded mb-2 p-3">
		<h2 className="text-lg">{request.file}</h2>
		<p className="font-bold">{request.status}</p>

		<a href={`/request/${request.id}`}>Открыть обращение</a>
		<br />
	</div>
}*/