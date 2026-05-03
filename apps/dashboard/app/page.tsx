const cards = [
  { role: 'Admin', scopes: ['catalog:*', 'publishing:*', 'royalties:*'] },
  { role: 'Label Manager', scopes: ['catalog:write', 'workflow:approve'] },
  { role: 'Artist', scopes: ['catalog:read', 'royalties:read'] },
];

export default function HomePage() {
  return (
    <main style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>TimeGap Music OS Dashboard</h1>
      <p>Role-based control center for release, publishing, and royalty workflows.</p>
      <section>
        {cards.map((card) => (
          <article key={card.role} style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12, marginTop: 12 }}>
            <h3>{card.role}</h3>
            <small>{card.scopes.join(' • ')}</small>
          </article>
        ))}
      </section>
    </main>
  );
}
