function formatTimeStampToDate(fecha) {
    
    const collator = new Intl.DateTimeFormat(`es-AR`, {
        day: `2-digit`,
        month: `2-digit`,
        year: `numeric`
    })

    return collator.format(fecha)
    // const dateObject  = new Date(fecha)
    // const year = dateObject.getFullYear()
    // const month = dateObject.getMonth() + 1

    // if (month > 10) {

    // }

    // const day = dateObject.getDate()

    // return `${day}/${month}/${year}`
}

function formatTimeStampToInputDate(date) {
    // const fecha = new Date(date)

    // const year = fecha.getFullYear()

    // const month = fecha.getMonth()

    const collator = new Intl.DateTimeFormat('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    })

    return collator.format(date)
}