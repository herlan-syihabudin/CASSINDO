import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectGallery from '@/components/ProjectGallery'

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <ProjectGallery />
      </div>
      <Footer />
    </main>
  )
}
