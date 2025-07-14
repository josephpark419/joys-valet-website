// Tribeca Tower Valet - Professional Website
document.addEventListener('DOMContentLoaded', function() {
    const businessInfo = {
        name: "Tribeca Tower Valet",
        phone: "(555) 123-4567",
        email: "info@tribecatowervalet.com"
    };

    const services = [
        {name: "Apartment Cleaning", prices: "Studio: $120 | 1BR: $135 | 2BR: $165"},
        {name: "Dry Cleaning", prices: "Shirts: $8.50 | Pants: $12 | Suits: $28"},
        {name: "Laundry Services", prices: "Wash & Fold: $3.50/lb | Delicate: $8/item"}
    ];

    document.body.innerHTML = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <header style="background: #1e3a8a; color: white; padding: 2rem; text-align: center;">
                <h1 style="margin: 0; font-size: 2.5rem;">${businessInfo.name}</h1>
                <p style="margin: 0.5rem 0 0; font-size: 1.2rem;">Professional Valet Services</p>
            </header>
            
            <main style="max-width: 1200px; margin: 2rem auto; padding: 0 1rem;">
                <section style="text-align: center; margin-bottom: 3rem;">
                    <h2 style="color: #1e3a8a; font-size: 2rem; margin-bottom: 1rem;">Premium Valet Services in Tribeca</h2>
                    <p style="font-size: 1.1rem; color: #666; max-width: 600px; margin: 0 auto;">
                        Experience luxury and convenience with our professional valet services. 
                        From apartment cleaning to dry cleaning and laundry, we handle it all.
                    </p>
                </section>

                <section style="margin-bottom: 3rem;">
                    <h2 style="text-align: center; color: #1e3a8a; margin-bottom: 2rem;">Our Services</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                        ${services.map(service => `
                            <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                <h3 style="color: #1e3a8a; margin-bottom: 1rem;">${service.name}</h3>
                                <p style="color: #666; margin: 0;">${service.prices}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <section style="background: #f9fafb; padding: 2rem; border-radius: 8px; text-align: center;">
                    <h2 style="color: #1e3a8a; margin-bottom: 1.5rem;">Contact Us</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                        <div>
                            <h3 style="margin-bottom: 0.5rem;">Phone</h3>
                            <p style="color: #2563eb; margin: 0;">${businessInfo.phone}</p>
                        </div>
                        <div>
                            <h3 style="margin-bottom: 0.5rem;">Email</h3>
                            <p style="color: #2563eb; margin: 0;">${businessInfo.email}</p>
                        </div>
                        <div>
                            <h3 style="margin-bottom: 0.5rem;">Address</h3>
                            <p style="color: #2563eb; margin: 0;">123 Tribeca Street, NY 10013</p>
                        </div>
                    </div>
                </section>
            </main>
            
            <footer style="background: #1e3a8a; color: white; text-align: center; padding: 1.5rem; margin-top: 2rem;">
                <p style="margin: 0;">&copy; 2025 ${businessInfo.name}. All rights reserved.</p>
            </footer>
        </div>
    `;
});
