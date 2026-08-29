import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import './Docs.css';

const endpoints = [
  {
    path: '/api/posts',
    href: '/api/posts',
    description: 'Restituisce l’elenco completo dei post disponibili.',
  },
  {
    path: '/api/posts/:id',
    href: '/api/posts/1',
    description: 'Restituisce il post corrispondente all’identificativo indicato.',
  },
];

export const Docs = () => (
  <section className='api-docs' aria-labelledby='api-docs-title'>
    <header className='api-docs-header'>
      <h1 id='api-docs-title' className='font-normal text-3xl'>
        Documentazione API
      </h1>
      <p>Gli endpoint disponibili restituiscono dati in formato JSON.</p>
    </header>

    <div className='api-docs-list'>
      {endpoints.map(({ path, href, description }) => (
        <Card as='article' key={path}>
          <Card.Header className='api-endpoint-header'>
            <Badge variant={Badge.variant.success}>GET</Badge>
            <a className='link' href={href}>
              <code>{path}</code>
            </a>
          </Card.Header>
          <Card.Content>
            <p>{description}</p>
            {path.includes(':id') && (
              <p className='api-example text-sm'>
                Esempio: <code>{href}</code>
              </p>
            )}
          </Card.Content>
        </Card>
      ))}
    </div>
  </section>
);
