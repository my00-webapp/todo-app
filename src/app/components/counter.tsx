

export function Counter({ count }: { count: number }) {
  return (
    <h1 className="bg-green-400 font-bold mt-4 text-center">
        残り{count}件
    </h1>   
  )
}