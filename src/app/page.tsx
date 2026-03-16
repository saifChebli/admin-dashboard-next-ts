import StatCard from "@/components/StatCard";


export default function Home() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <StatCard 
        title="Users"
        value={120}
      />

      <StatCard 
        title="Invoices"
        value={80}
      />

      <StatCard 
        title="Revenue"
        value="$12,400"
      />
    </div>
  );
}
