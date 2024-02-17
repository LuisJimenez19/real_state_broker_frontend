import DataTableProperties from "@/components/admin/DataTableProperites";
import AuthLayout from "@/layouts/AuthLayout";

function DashboardPage() {
  return (
    <AuthLayout>
      <main className="py-10">
        <h1 className="text-3xl md:text-6xl text-center font-extrabold animate-slide-in-top">
          Tus propiedades
        </h1>
        <DataTableProperties />
      </main>
    </AuthLayout>
  );
}

export default DashboardPage;
