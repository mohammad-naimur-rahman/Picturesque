import Button from 'components/common/Button'
import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo })
  }
  render() {
    if (this.state.hasError && process.env.NODE_ENV === 'production') {
      return (
        <div className='flex-col-all w-full min-h-screen'>
          <h2 className='text-red text-4xl mb-4'>Oops, there is an error!</h2>
          <Button type='button' onClick={() => this.setState({ hasError: false })}>
            Try again?
          </Button>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
