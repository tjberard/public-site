import { Button } from "@/components/ui/button"

function Home() {
  return (
    <div className="coming-soon">
      <h1>Coming Soon</h1>
      <Button
        variant="outline"
        size="sm"
        render={<a href="https://www.linkedin.com/in/tylerberard/" target="_blank" rel="noopener noreferrer" />}
      >
        Test shadcn
      </Button>
    </div>
  )
}

export default Home
