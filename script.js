async function fetchMoonPhase() {
    const url = 'https://moon-phase1.p.rapidapi.com/?city=budapest';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'moon-phase1.p.rapidapi.com',
            'x-rapidapi-key': '<API-KEY>'
        }
    };

    try {
        const res = await fetch(url, options);
        const record = await res.json();

        console.log('API Response:', record);  // Log the entire response for debugging

        // Temporarily display the entire response for better debugging
        document.getElementById("moonPhase").innerHTML = `<li>${JSON.stringify(record)}</li>`;

        // Adjust based on actual response structure
        if (record && record.moon && record.moon.phase) {
            const phaseDetails = `
                <li>Phase: ${record.moon.phase}</li>
                <li>Info: ${record.moon.info}</li>
                <li>Visible: ${record.moon.visible}</li>
                <li>Altitude: ${record.moon.altitude}</li>
                <li>Distance: ${record.moon.distance}</li>
                <li>Next Full Moon: ${record.moon.next_full_moon}</li>
                <li>Next New Moon: ${record.moon.next_new_moon}</li>
                <li>Today's Moonrise: ${record.moon.today_moonrise}</li>
                <li>Today's Moonset: ${record.moon.today_moonset}</li>
                <li>Location: ${record.moon.location}</li>
                <li>Today's Date: ${record.moon.today}</li>
                <li>Last Update: ${record.moon.last_update}</li>
                <li><img src="${record.moon.img_flat}" alt="Moon Phase Image"></li>
            `;
            document.getElementById("moonPhase").innerHTML = phaseDetails;
        } else {
            document.getElementById("moonPhase").innerHTML = `<li>Error: Unexpected response structure</li>`;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("moonPhase").innerHTML = `<li>Error: ${error.message}</li>`;
    }
}

fetchMoonPhase();

// https://rapidapi.com/thestevepappa/api/moon-phase1/playground/apiendpoint_d3c60b11-9aff-458f-98e5-8bfd4ecd2e45
