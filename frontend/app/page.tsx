import ChatBot from '../components/ChatBot';
import Hero from '../components/Hero'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero 
        name="Joelle"
        title="Full Stack Engineer"
        description="Provide solutions to problems using web applications, cloud technologies and AI."
        imageSrc="/joelle.jpg"
      />
      <div className="container mx-auto p-4">
        <ChatBot />
      </div>
    </main>
  )
}