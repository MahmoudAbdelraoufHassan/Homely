import { Section } from "../../ui/Section";
import SectionHeader from "../../ui/SectionHeader";
import { Container } from "../../ui/Container";
import PropertyList from "../../features/Properties/Components/PropertyList";
import PropertyCard from "../../features/Properties/Components/PropertyCard";
import { useProperties } from "../../features/Properties/useProperties";
import SectionError from "../../ui/SectionError";
function WhyUsSection() {
  const { properties, isLoading, error } = useProperties();

  return (
    
    <Section>
      <Container>
        <SectionHeader
          label={"Properties"}
          title={"Discover inspiring designed homes."}
          desc={"Curated homes where elegance, style, and comfort unite."}
          $align="center"
        />
      </Container>
      <Container>
        {isLoading && <p role="status">Loading properties...</p>}
        {error && <SectionError errorMessage={`Unable to load properties: ${error}`} />}
        {!isLoading && !error && (
          <PropertyList>
            {properties.slice(0, 6).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </PropertyList>
        )}
      </Container>
    </Section>
  );
}

export default WhyUsSection;
