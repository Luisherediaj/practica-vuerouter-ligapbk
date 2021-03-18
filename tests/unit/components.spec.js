import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import Champions from '@/components/Champions.vue'
import Copa from '@/components/Copa.vue'
import Equipos from '@/components/Equipos.vue'
import Fechas from '@/components/Fechas.vue'
import Ingresos from '@/components/Ingresos.vue'
import Liga from '@/components/Liga.vue'
import Oficina from '@/components/Oficina.vue'
import Reglas from '@/components/Reglas.vue'

describe('Header.vue', () => {
  it('Se renderiza el componente Header', () => {
    const title = '<span>Title</span>'
    const wrapper = shallowMount(Header, {
      slots: { title: title }
    })
    expect(wrapper.html()).toMatch(title)
  })
})

describe('Champions.vue', () => {
  it('Se renderiza el componente Champìons', () => {
    const championstest = '<span>Championstest</span>'
    const wrapper = shallowMount(Champions, {
      slots: { championstest: championstest }
    })
    expect(wrapper.html()).toMatch(championstest)
  })
})

describe('Copa.vue', () => {
  it('Se renderiza el componente Copa', () => {
    const copatest = '<span>Copatest</span>'
    const wrapper = shallowMount(Copa, {
      slots: { copatest: copatest }
    })
    expect(wrapper.html()).toMatch(copatest)
  })
})

describe('Equipos.vue', () => {
  it('Se renderiza el componente Equipos', () => {
    const equipostest = '<span>Equipostest</span>'
    const wrapper = shallowMount(Equipos, {
      slots: { equipostest: equipostest }
    })
    expect(wrapper.html()).toMatch(equipostest)
  })
})

describe('Fechas.vue', () => {
  it('Se renderiza el componente Fechas', () => {
    const fechastest = '<span>Fechastest</span>'
    const wrapper = shallowMount(Fechas, {
      slots: { fechastest: fechastest }
    })
    expect(wrapper.html()).toMatch(fechastest)
  })
})

describe('Ingresos.vue', () => {
  it('Se renderiza el componente Ingresos', () => {
    const ingresostest = '<span>Ingresostest</span>'
    const wrapper = shallowMount(Ingresos, {
      slots: { ingresostest: ingresostest }
    })
    expect(wrapper.html()).toMatch(ingresostest)
  })
})

describe('Liga.vue', () => {
  it('Se renderiza el componente Liga', () => {
    const ligatest ='<span>Ligatest</span>'
    const wrapper = shallowMount(Liga, {
      slots: { ligatest: ligatest }
    })
    expect(wrapper.html()).toMatch(ligatest)
  })
})

describe('Oficina.vue', () => {
  it('Se renderiza el componente Oficina', () => {
    const oficinatest = '<span>Oficinatest</span>'
    const wrapper = shallowMount(Oficina, {
      slots: { oficinatest: oficinatest }
    })
    expect(wrapper.html()).toMatch(oficinatest)
  })
})

describe('Reglas.vue', () => {
  it('Se rendereiza el componente Reglas', () => {
    const reglastest = '<span>Reglastest</span>'
    const wrapper = shallowMount(Reglas, {
      slots: { reglastest: reglastest }
    })
    expect(wrapper.html()).toMatch(reglastest)
  })
})