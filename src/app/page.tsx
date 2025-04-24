import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-3xl w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">Como implantar seu aplicativo no Vercel</h1>

        <div className="space-y-6">
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-700">1. Prepare seu código</h2>
            <p className="text-gray-600">
              Certifique-se de que seu código está em um repositório Git (GitHub, GitLab ou Bitbucket). Se ainda não
              estiver, crie um repositório e faça upload do seu código.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-700">2. Crie uma conta no Vercel</h2>
            <p className="text-gray-600">
              Acesse{" "}
              <Link href="https://vercel.com/signup" className="text-blue-600 hover:underline">
                vercel.com/signup
              </Link>{" "}
              e crie uma conta gratuita. Você pode se cadastrar usando sua conta do GitHub, GitLab ou Bitbucket.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-700">3. Importe seu projeto</h2>
            <p className="text-gray-600">
              No dashboard do Vercel, clique em "Add New..." e depois "Project". Selecione o repositório que contém seu
              aplicativo.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-700">4. Configure seu projeto</h2>
            <p className="text-gray-600">
              O Vercel detectará automaticamente o framework que você está usando. Verifique as configurações e ajuste
              se necessário.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-700">5. Implante seu projeto</h2>
            <p className="text-gray-600">
              Clique em "Deploy" e aguarde a conclusão da implantação. Após a implantação, você receberá um URL
              permanente para seu aplicativo.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-700">6. Configure um domínio personalizado (opcional)</h2>
            <p className="text-gray-600">
              Para um site ainda mais profissional, você pode adicionar um domínio personalizado. Vá para a seção
              "Domains" do seu projeto e siga as instruções.
            </p>
          </section>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="text-lg font-medium text-blue-800">Dica importante</h3>
          <p className="text-blue-700 mt-1">
            O Vercel oferece hospedagem gratuita para projetos pessoais com algumas limitações. Para projetos comerciais
            ou com necessidades específicas, considere os planos pagos.
          </p>
        </div>
      </div>
    </main>
  )
}
