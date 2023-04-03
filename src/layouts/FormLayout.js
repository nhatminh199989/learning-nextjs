export default function FormLayout({ children }) {
    return (
        <>
            <div className="fixed w-screen h-screen bg-slate-300 opacity-50"></div>
            { children }            
        </>
    )
}