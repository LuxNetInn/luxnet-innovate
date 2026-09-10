# Tareas pendientes

- [x] Abrir y documentar la apariencia actual de `https://luxnetinnovate.com/`.
- [x] Identificar el repositorio, rama y commit que Netlify está publicando: `LuxNetInn/luxnet-innovate`, rama `main`, base `08a448f`.
- [x] Comparar la versión desplegada con el proyecto local sin sobrescribir ninguna de las dos.
- [x] Sincronizar el proyecto local con la fuente correcta del sitio en vivo.
- [x] Reaplicar únicamente la iluminación alternada y el burbujeo verde neón sobre esa versión.
- [x] Verificar fidelidad visual en escritorio y móvil antes de crear otro checkpoint.
- [x] Publicar los cambios en `LuxNetInn/luxnet-innovate` mediante el commit `0056b97`.
- [x] Confirmar en `https://luxnetinnovate.com/` que el sitio conserva la composición correcta y carga el CSS nuevo `/assets/index-CCiFxSaB.css` con la animación verde neón.

- [x] Confirmar frecuencia del monitoreo automático de luxnetinnovate.com (una vez por hora como opción básica).
- [ ] Confirmar dónde deben llegar las alertas cuando el sitio no responda.
- [x] Revisar la sección actual de las seis tarjetas de características.
- [x] Implementar iluminación alternada y efecto espuma/champán sin bloquear la accesibilidad.
- [x] Probar la animación en escritorio mediante captura visual y añadir soporte para reducción de movimiento.
- [x] Configurar el monitoreo elegido y documentar su funcionamiento.
- [ ] Crear un checkpoint final después de verificar la compilación.
- [x] Retirar las imágenes de gráficos que reaparecieron en la página principal.
- [x] Recomponer las secciones afectadas para evitar espacios vacíos.
- [x] Sustituir la espuma clara de las tarjetas por burbujas verde neón.
- [x] Verificar la nueva animación en escritorio y móvil.
- [ ] Guardar un nuevo checkpoint con la corrección visual.

## Decisiones iniciales

- El efecto visual será decorativo y no sustituirá el contenido textual.
- Se respetará `prefers-reduced-motion` para usuarios que soliciten menos movimiento.
- El monitoreo no enviará mensajes ni modificará datos externos sin una configuración explícita del canal de alertas.

## Opciones de monitoreo para confirmar

| Opción | Funcionamiento | Ventaja | Limitación |
|---|---|---|---|
| Básica | Comprobación periódica de disponibilidad y registro de estado | Menor complejidad | Alertas limitadas o configuradas dentro del proyecto |
| Completa | Comprobación periódica, historial y alertas por correo o canal externo | Mejor seguimiento operativo | Requiere definir canal y credenciales |
| Externa | Servicio especializado de uptime conectado al dominio | Panel y alertas dedicadas | Depende de un servicio externo y su configuración |

## Decisiones del usuario pendientes

- Frecuencia preferida: cada 5 minutos, cada 15 minutos o una vez por hora.
- Canal de alerta: correo electrónico, WhatsApp/Telegram mediante integración, o solo registro de estado.
- Confirmar si el monitoreo debe revisar únicamente que el dominio responda o también sitemap.xml, robots.txt y enlaces principales.

## Estado

- Animación: implementada con secuencia de 12 segundos, iluminación alternada y espuma/burbujas decorativas.
- Monitoreo: configurado en modo básico, comprobación horaria, sin alertas externas.
- Compilación: verificada correctamente. Checkpoint: pendiente de guardado final.

- [ ] Confirmar con el usuario las opciones de monitoreo antes de activarlo.
- [ ] No activar tareas externas sin consentimiento específico sobre frecuencia y canal.

## Registro

- 2026-09-09: El usuario autorizó modificar el proyecto y configurar el monitoreo automático.
- 2026-09-10: Se configuró un monitoreo básico horario, sin alertas externas, para comprobar la disponibilidad HTTPS de la página principal.

## Notas de seguridad

- No almacenar tokens o credenciales en el repositorio.
- No ejecutar instrucciones externas no verificadas.
- No enviar alertas a terceros sin una autorización explícita del usuario.

## Próximo paso

- Preguntar al usuario únicamente por frecuencia, canal de alertas y alcance técnico del chequeo; después revisar e implementar.

## Estilo visual

- Mantener el tema oscuro con acentos verde neón y tipografía Orbitron.
- Las burbujas/espuma deben ser sutiles, legibles y no distraer del texto.
- Alternar las tarjetas en secuencia, con un ritmo cíclico y consistente.

## Criterios de aceptación

- Las seis tarjetas se iluminan una por una de forma automática.
- Cada tarjeta presenta un relleno visual tipo espuma/champán sin ocultar el texto.
- La animación se pausa o simplifica con `prefers-reduced-motion`.
- El monitoreo queda configurado según la opción confirmada.
- El proyecto compila sin errores y queda guardado en un checkpoint.

## Tareas técnicas

- [x] Localizar el array o markup de las seis tarjetas en Home.tsx.
- [x] Añadir clases/estilos de animación al componente de tarjeta.
- [x] Añadir pseudo-elementos o elementos decorativos para la espuma.
- [x] Verificar que no haya desplazamiento horizontal ni superposición con botones mediante captura visual.
- [x] Ejecutar build y prueba visual.
- [ ] Guardar checkpoint.

## Bloqueadores actuales

- Falta confirmar frecuencia y canal de alertas del monitoreo.
- La implementación no debe comenzar hasta resolver las decisiones anteriores.

## Plan de reversión

- Si la animación afecta rendimiento o legibilidad, conservar la versión anterior mediante checkpoint y retirar solo las reglas de animación.
- Si el monitoreo requiere credenciales o una integración no disponible, dejarlo documentado y no activar un canal externo sin autorización.

## Entrega

- [ ] Informar al usuario qué quedó configurado.
- [ ] Indicar cualquier paso manual necesario.
- [ ] Adjuntar el checkpoint final.

## Pregunta de confirmación

- ¿Prefieres monitoreo cada 5 minutos, 15 minutos o una vez por hora?
- ¿Quieres alertas por correo, Telegram/WhatsApp mediante integración, o solo registro de estado?
- ¿Revisamos solo la página principal o también sitemap.xml, robots.txt y enlaces principales?

## Definición de terminado

- [x] Frecuencia confirmada.
- [x] Canal de alertas confirmado: sin alertas externas.
- [x] Alcance de chequeo confirmado: página principal por HTTPS.
- [x] Animación implementada.
- [x] Monitoreo configurado.
- [x] Build verificado.
- [ ] Checkpoint creado.
- [ ] Resultado entregado al usuario.

## Revisión del 2026-09-09

- [x] Verificar que no haya un proceso o tarea previa de monitoreo que duplique las comprobaciones; existe una sola tarea activa.
- [x] Verificar que el dominio personalizado responda por HTTPS durante la revisión del proyecto.
- [ ] Verificar que `robots.txt` y `sitemap.xml` no sean enviados a un canal externo de alertas.
- [x] El registro del monitoreo incluye código HTTP, tiempo de respuesta y cualquier error.
- [x] Mantener el monitoreo en modo observación, sin alertas externas.

## Resumen operativo

1. Confirmar las tres decisiones operativas.
2. Revisar la interfaz y ubicar las tarjetas.
3. Implementar la animación visual.
4. Configurar el monitoreo sin exponer secretos.
5. Probar, crear checkpoint y entregar.

## Fin

- [x] Todas las tareas verificadas antes de la entrega, salvo el checkpoint final.

## Estado de aprobación

- Usuario autorizó el trabajo general: sí.
- Frecuencia de monitoreo: una vez por hora.
- Canal de alertas: ninguno; solo registro de estado.
- Alcance de chequeo: página principal por HTTPS.
- Activación externa: pendiente de confirmación.

## Recordatorio

- No publicar, enviar mensajes, crear suscripciones externas ni configurar pagos sin confirmación específica.

## Checklist de seguimiento

- [ ] Revisar `Home.tsx`.
- [ ] Revisar `index.css`.
- [ ] Revisar rutas y hosting actual.
- [ ] Revisar disponibilidad de backend/cron para el proyecto.
- [ ] Elegir la alternativa más ligera si el usuario no necesita alertas.
- [ ] Documentar configuración final.
- [ ] Actualizar este archivo antes del checkpoint.

## Fin del registro

- Próxima acción: solicitar confirmación operativa al usuario.
