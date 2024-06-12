interface AccountCardProps {
  params: {
    header: string;
    description: string;
    price?: number;
  };
  children: React.ReactNode;
}

export function AccountCard({ params, children }: AccountCardProps) {
  const { header, description } = params;
  return (
    <div className="bg-white border-neutral-200 border rounded-lg">
      <div id="body" className="p-4 ">
        <h3 className="text-xl font-semibold">{header}</h3>
        <p className="text-neutral-500">{description}</p>
      </div>
      {children}
    </div>
  );
}

export function AccountCardBody({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}

export function AccountCardFooter({
  description,
  children,
}: {
  children: React.ReactNode;
  description: string;
}) {
  return (
    <div
      className="bg-neutral-50 p-4 border border-neutral-200 flex justify-between items-center rounded-b-lg"
      id="footer"
    >
      <p className="text-neutral-500 text-sm">{description}</p>
      {children}
    </div>
  );
}
