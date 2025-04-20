import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch('/portfolio-test/content/portfolio.md')
      .then(response => response.text())
      .then(text => setMarkdown(text))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h1:text-center prose-h1:mb-8 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-800 prose-strong:text-gray-800">
          <div className="bg-white rounded-2xl shadow-lg p-8 transform-3d hover:rotate-y-2 transition-all duration-300">
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a target="_blank" rel="noopener noreferrer" {...props} />
                ),
              }}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  )
}

export default App
