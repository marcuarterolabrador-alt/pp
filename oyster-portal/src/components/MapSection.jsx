import { useMemo, useState } from 'react'
import { MapContainer, TileLayer, Marker, Polygon, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapPin, Building2, Waves } from 'lucide-react'
import { mfrc, bays, restorationPoints } from '../data/mapData'
import bertraImg from '../assets/bertra.JPEG'
import mfrcImg from '../assets/mfrc.png'
import kkImg from '../assets/kk.jpeg'

function pinIcon(color, size = 26) {
  return L.divIcon({
    className: '',
    html: `<div style="
      width:${size}px;height:${size}px;border-radius:50% 50% 50% 0;
      background:${color};transform:rotate(-45deg);
      border:2px solid #f0f9ff; box-shadow:0 0 10px ${color};
    "></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
  })
}

const mfrcIcon = pinIcon('#f43f5e', 30)
const kilkieranIcon = pinIcon('#0ea5e9')
const bertraghboyIcon = pinIcon('#14b8a6')

export default function MapSection() {
  const [selected, setSelected] = useState({ type: 'mfrc', data: mfrc })

  const bayIcon = (bayId) => (bayId === 'kilkieran' ? kilkieranIcon : bertraghboyIcon)

  const points = useMemo(() => restorationPoints, [])

  return (
    <div className="map-section-grid">
      <div className="glass map-container-wrapper">
        <MapContainer
          center={[53.32, -9.43]}
          zoom={10}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; OpenStreetMap contributors'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          {bays.map((bay) => (
            <Polygon
              key={bay.id}
              positions={bay.polygon}
              pathOptions={{ color: bay.color, weight: 1.5, fillOpacity: 0.12 }}
              eventHandlers={{ click: () => setSelected({ type: 'bay', data: bay }) }}
            >
              <Tooltip sticky>{bay.name}</Tooltip>
            </Polygon>
          ))}

          <Marker
            position={mfrc.position}
            icon={mfrcIcon}
            eventHandlers={{ click: () => setSelected({ type: 'mfrc', data: mfrc }) }}
          >
            <Tooltip>{mfrc.name}</Tooltip>
          </Marker>

          {points.map((pt) => (
            <Marker
              key={pt.id}
              position={[pt.lat, pt.lon]}
              icon={bayIcon(pt.bay)}
              eventHandlers={{ click: () => setSelected({ type: 'point', data: pt }) }}
            >
              <Tooltip>{`#${pt.id} ${pt.name}`}</Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="glass glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {selected.type === 'mfrc' && (
          <>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <Building2 size={20} color="var(--coral)" />
              <span className="pill coral">Institution</span>
            </div>
            <h3>{selected.data.name}</h3>
            <p style={{ color: 'var(--text-dim)' }}>{selected.data.description}</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
              {selected.data.position[0].toFixed(3)}, {selected.data.position[1].toFixed(3)}
            </p>
            <div style={{ marginTop: '0.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--panel-border)' }}>
              <img
                src={mfrcImg}
                alt="MFRC Building"
                style={{ width: '100%', height: 'auto', maxHeight: '180px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <span style={{ fontSize: '0.62rem', color: 'var(--text-dim)', display: 'block', marginTop: '2px' }}>
              Image source: IMBRSea / Atlantic Technological University (ATU)
            </span>
          </>
        )}

        {selected.type === 'bay' && (
          <>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <Waves size={20} color={selected.data.color} />
              <span className="pill">Bay</span>
            </div>
            <h3>{selected.data.name}</h3>
            <p style={{ color: 'var(--text-dim)' }}>{selected.data.dms}</p>

            {selected.data.id === 'bertraghboy' && (
              <div style={{ marginTop: '0.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--panel-border)' }}>
                <img
                  src={bertraImg}
                  alt="Bertraghboy Bay overview"
                  style={{ width: '100%', height: 'auto', maxHeight: '180px', objectFit: 'cover', display: 'block' }}
                />
              </div>
            )}

            {selected.data.id === 'kilkieran' && (
              <div style={{ marginTop: '0.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--panel-border)' }}>
                <img
                  src={kkImg}
                  alt="Kilkieran Bay overview"
                  style={{ width: '100%', height: 'auto', maxHeight: '180px', objectFit: 'cover', objectPosition: 'bottom', display: 'block' }}
                />
              </div>
            )}
          </>
        )}

        {selected.type === 'point' && (
          <>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <MapPin size={20} color="var(--cyan)" />
              <span className="pill">Restoration Point #{selected.data.id}</span>
            </div>
            <h3>{selected.data.name}</h3>
            <dl style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-dim)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid var(--panel-border)' }}>
                <dt>Bay</dt>
                <dd style={{ margin: 0, color: 'var(--text)' }}>
                  {selected.data.bay === 'kilkieran' ? 'Kilkieran Bay' : 'Bertraghboy Bay'}
                </dd>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
                <dt>Coordinates</dt>
                <dd style={{ margin: 0, color: 'var(--text)' }}>
                  {selected.data.lat.toFixed(5)}, {selected.data.lon.toFixed(5)}
                </dd>
              </div>
            </dl>
          </>
        )}

        {selected.type !== 'mfrc' && (
          <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: 'auto' }}>
            Bay boundaries are illustrative overlays derived from sampling point clusters.
          </p>
        )}
      </div>
    </div>
  )
}
