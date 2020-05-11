
import { Utm } from '../UtmExtractor'

const awaitWindow = typeof window !== "undefined" ? window : {}

export default function(formData) {

     // Needs to be the search parameters from the url
    const utm = new Utm(awaitWindow.location?.search)

    // extracts the Utm values
    const { utm_source="none", utm_medium="none", utm_campaign="none", utm_term="none", utm_content="none" } = utm.get()


    const utmData = {
        utm_source ,
        utm_medium, 
        utm_campaign, 
        utm_content, 
        utm_term,
    }

    const otherData = {
        page: awaitWindow.location?.pathname, // extracted (url)
    }

    return {
        ...formData,
        ...utmData,
        ...otherData
    }
}


