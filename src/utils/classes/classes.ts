export default function classes (...args: any[]): string {
  return args.filter(e => e).join(' ')
}
