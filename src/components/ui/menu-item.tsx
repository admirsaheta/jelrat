export const MenuItem = ({ title = "Klix", bgColor = "bg-red-400", url = "#" }: { title?: string; bgColor?: string; url?: string }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="flex flex-row justify-center items-center gap-2">
            <div className={`w-4 h-4 ${bgColor} rounded-sm`} />
            <h2 className="text-white">{title}</h2>
        </a>
    );
}