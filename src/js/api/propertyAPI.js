export const propertiesData = [
    { 
        id: '1',
        title: '4-Bedroom Duplex', 
        location: 'Chevron Drive, Lekki', 
        price: '₦8,000,000/yr', 
        status: 'verified', 
        image: 'images/property-01.png',
        description: 'A beautiful and spacious duplex in a highly secured estate with clean water and steady power supply.',
        agent: 'Prince Properties'
    },
    { 
        id: '2',
        title: 'Self Contain', 
        location: 'Surulere, Lagos', 
        price: '₦600,000/yr', 
        status: 'verified', 
        image: 'images/property-02.png',
        description: 'Cozy self-contain with running water and stable electricity.',
        agent: 'VerifyHomes Ltd'
    },
    { 
        id: '3',
        title: '2-Bedroom Flat', 
        location: 'Wuse 2, Abuja', 
        price: '₦3,500,000/yr', 
        status: 'pending', 
        image: 'images/property-03.png',
        description: 'Modern 2 bedroom flat. Agent is currently undergoing verification. Please proceed with caution.',
        agent: 'New Age Real Estate'
    },
    { 
        id: '4',
        title: '3-Bedroom Apartment', 
        location: 'GRA Phase 2, Port Harcourt', 
        price: '₦4,200,000/yr', 
        status: 'scam', 
        image: 'images/property-04.png',
        description: 'FLAGGED: Multiple users reported advance fee fraud for this listing. Do not pay any fees before viewing.',
        agent: 'Unknown'
    }
];

export async function searchProperties(query) {
    if (!query) return propertiesData;
    
    query = query.toLowerCase();
    return propertiesData.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.location.toLowerCase().includes(query) ||
        p.agent.toLowerCase().includes(query)
    );
}

export async function getPropertyById(id) {
    return propertiesData.find(p => p.id === id);
}
