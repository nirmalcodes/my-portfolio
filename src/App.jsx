import React, { Suspense } from 'react'
import { Layout } from './components'
import { ErrorBoundary } from 'react-error-boundary'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages'

const App = () => {
    return (
        <div className="relative flex min-h-screen flex-col bg-[#f1f1f1]">
            <Suspense>
                <ErrorBoundary fallback={<div>Something went wrong</div>}>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </Layout>
                </ErrorBoundary>
            </Suspense>
        </div>
    )
}

export default App
