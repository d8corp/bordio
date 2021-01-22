export function classes (...args: any[]): string {
  return args.filter(e => typeof e === 'string').join(' ')
}

export default classes
