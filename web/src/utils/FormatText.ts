export const FormatKeywords = (text: string): string => {
  // reference: https://stackoverflow.com/questions/38148361/javascript-find-hashtags-in-text-and-return-with-link

  // look for hashtags
  let formattedText = text.replace(/#(\w+)/g, '<a href="/tag/$1">#$1</a>')

  // look for users
  formattedText = formattedText.replace(
    /@(\w+)/g,
    '<a href="/profile/$1">@$1</a>'
  )
  return formattedText
}

interface IFormattedLink {
  short: string
  long: string
}

export const FormatLinks = (link: string): IFormattedLink => {
  const httpPattern = /(https?:\/\/)/
  const wwwPattern = /www./g

  const splitLink = link
    .replaceAll(' ', '')
    .split(httpPattern)
    .join('$')
    .split(wwwPattern)
    .join('$')
    .split('$')

  const cleanLink = splitLink.filter((n) => n)

  if (cleanLink.length < 2) {
    return {
      short: cleanLink.slice(-1)[0],
      long: `https://${cleanLink.join('')}`,
    }
  }

  return {
    short: cleanLink.slice(-1)[0],
    long: cleanLink.join(''),
  }
}

export const FormatThousands = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
