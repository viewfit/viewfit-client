import { createFileRoute } from '@tanstack/react-router'
import type { JsonResponse } from '@tanstack/react-router/ssr/client';
import ky from 'ky'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {

  const data = ky.get('http://localhost:9080/').json();

  console.log(data);

  return (<div>
      <div>
        
      </div>
  </div>)
}
