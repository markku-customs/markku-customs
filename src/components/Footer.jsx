const Footer = () => {
    const year = new Date().getFullYear()

    return (
      <footer className="bg-slate-950 py-4 mt-3">
        <div className="container mx-auto text-center text-xs text-slate-400">
            © {year} Markku Customs. All rights reserved.
        </div>
      </footer>
    )
  }
  
export default Footer