import PropertyCard from "../features/Properties/Components/PropertyCard";
import PropertyList from "../features/Properties/Components/PropertyList";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import SectionHeader from "../ui/SectionHeader"
import { useLoaderData } from "react-router-dom";

function PropertiesPage() {
const loadProperties = useLoaderData();

  return (
    <Section $withNavbarOffset>
      <SectionHeader
        label={"Properties"}
        $align="center"
        title={"Luxury villas"}
        desc={
         "Experience elegance and comfort with our exclusive luxury villas, designed for sophisticated living."
        }
      />
      <Container>
          <PropertyList>
           { loadProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />))}
          </PropertyList>
      </Container>
    </Section>
  );
}

export default PropertiesPage